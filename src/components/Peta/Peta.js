import React, { useEffect, useState } from 'react';
import { PetaSection,
         PetaWrapper,
         PetaContainer,
         PetaHeading,
         Subtitle,
} from './Peta.elements';
import L from 'leaflet';
import { MapContainer,
         TileLayer,
         Marker,
         Popup
} from 'react-leaflet';   
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const position = ["-0.733", "120.883"];

let dataTanda = [];
let dataDeskripsi = [];
let dataHumidity = [];
let dataTemperature = [];
let dataWindSpeed = [];
let dataWindDirection = [];

var nama_kota;
var dateTime;
var latitude;
var longitude;
var koordinat;
var dataKelembapan;
var dataSuhu;
var dataKecAngin;
var dataArahAngin;

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

let myCurrentDate = new Date();
let datetime = myCurrentDate.getUTCFullYear() + '' + 
               (myCurrentDate.getUTCMonth()+1).toString().padStart(2,'0') + '' + 
               myCurrentDate.getUTCDate().toString().padStart(2,'0') +''+ 
               myCurrentDate.getUTCHours().toString().padStart(2,'0') + '00';

const Peta = () => {

    var jumlah_kota = 15;    

    const [tanda , setTanda] = useState([["-0.733", "120.883"]]);
    const [deskripsi , setDeskripsi] = useState([["nama_kota"]]);
    const [humidity, setHumidity] = useState([]);
    const [temperature, setTemperature] = useState([]);
    const [windSpeed, setWindSpeed] = useState([]);
    const [windDirection, setWindDirection] = useState([]);

    const addTanda = () => {
        setTanda(oldArray => [...oldArray, koordinat]);
    };    
    const addDeskripsi = () => {
        setDeskripsi(oldArray => [...oldArray, nama_kota]);
    };
    const addHumidity = () => {
        setHumidity(oldArray => [...oldArray, dataKelembapan]);
    };
    const addTemperature = () => {
        setTemperature(oldArray => [...oldArray, dataSuhu]);
    };
    const addWindSpeed = () => {
        setWindSpeed(oldArray => [...oldArray, dataKecAngin]);
    };
    const addWindDirection = () => {
        setWindDirection(oldArray => [...oldArray, dataArahAngin]);
    };
    
    if ( tanda.length >= (jumlah_kota+1) ){
        dataTanda = tanda;
        dataDeskripsi = deskripsi;
        dataHumidity = humidity;
        dataTemperature = temperature;
        dataWindSpeed = windSpeed;
        dataWindDirection = windDirection;
    }
    
    useEffect(() => {
        fetch('https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-SulawesiTengah.xml')
            .then(res => res.text())
            .then(data => {
                let parse = new DOMParser();
                let xmlData = parse.parseFromString(data, 'text/xml');
                
                let areas = xmlData.querySelectorAll('area');
                areas.forEach((area) => {

                    latitude = area.getAttribute('latitude');
                    longitude = area.getAttribute('longitude');
                    nama_kota = area.getAttribute('description');
                    koordinat = [latitude, longitude];
                    addDeskripsi();   
                    addTanda();

                    let posPrakiraan;
                    let timeRangesHu = area.querySelectorAll('parameter[id="hu"] timerange');
                    let timeRangesT = area.querySelectorAll('parameter[id="t"] timerange');
                    let timeRangesKecAngin = area.querySelectorAll('parameter[id="ws"] timerange');
                    let timeRangesArahAngin = area.querySelectorAll('parameter[id="wd"] timerange');
                    let getTime = false;                                   
                    
                    timeRangesHu.forEach((timeRangeHu, index) =>{
                        dateTime = timeRangeHu.getAttribute('datetime');
                        if ( dateTime >= datetime && getTime === false ) {
                            posPrakiraan = index - 1;
                            if( posPrakiraan < 0 ) {
                                posPrakiraan = 0;
                            }
                        getTime = true;

                        dataKelembapan = timeRangesHu[posPrakiraan].querySelector('value').textContent;
                        dataSuhu = timeRangesT[posPrakiraan].querySelector('value').textContent;
                        dataKecAngin = timeRangesKecAngin[posPrakiraan].querySelector('value').textContent;
                        dataArahAngin = timeRangesArahAngin[posPrakiraan].querySelector('value').textContent;

                        //console.log('index ke: ' + posPrakiraan + ' , dataSuhu: ' + dataSuhu);
                        addHumidity();
                        addTemperature();
                        addWindSpeed();
                        addWindDirection();                                                         
                        }                                
                    });                           
                     
                });                          
            })
            .catch(err => console.log(err));                  
    }, [])

    if (dataTanda.length >= (jumlah_kota+1) ) {
        //console.log(datetime);
        return (
            <>
                <PetaSection>
                    <PetaWrapper>
                            <PetaHeading>Peta Cuaca</PetaHeading>
                            <PetaContainer>
                                <MapContainer center={position} zoom={7} scrollWheelZoom={false} style={{ width: '80vw', height: '80vh' }}>
                                    <TileLayer
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {/* <Marker position = {dataTanda[1]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[1]} <br/>
                                            Suhu: 31 C <br/>
                                            Kelembapan: - % <br/>
                                            Kondisi Cuaca: Berawan
                                        </Popup>
                                    </Marker> 
                                    <Marker position = {dataTanda[2]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[2]} <br/>
                                            Suhu: 32 C <br/>
                                            Kelembapan: - % <br/>
                                            Kondisi Cuaca: Cerah Berawan
                                        </Popup>
                                    </Marker> 
                                    <Marker position = {dataTanda[3]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[3]} <br/>
                                            Suhu: 29 C <br/>
                                            Kelembapan: - % <br/>
                                            Kondisi Cuaca: Berawan
                                        </Popup>
                                    </Marker>
                                    <Marker position = {dataTanda[4]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[4]} <br/>
                                            Suhu: 30 C <br/>
                                            Kelembapan: - % <br/>
                                            Kondisi Cuaca: Hujan
                                        </Popup>
                                    </Marker>  */}
                                    <Marker position = {dataTanda[5]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[5]} <br/>
                                            Suhu: {dataTemperature[0]} C <br/>
                                            Kelembapan: {dataHumidity[0]} % <br/>
                                            Kecepatan Angin : {dataWindSpeed[0]} Knot <br/>
                                            Arah Angin : {dataWindDirection[0]} derajat <br/>
                                            Kondisi Cuaca: Hujan Lebat
                                        </Popup>
                                    </Marker>
                                    <Marker position = {dataTanda[6]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[6]} <br/>
                                            Suhu: {dataTemperature[1]} C <br/>
                                            Kelembapan: {dataHumidity[1]} % <br/>
                                            Kecepatan Angin : {dataWindSpeed[1]} Knot <br/>
                                            Arah Angin : {dataWindDirection[1]} derajat <br/>
                                            Kondisi Cuaca: Hujan Lebat
                                        </Popup>
                                    </Marker> 
                                    <Marker position = {dataTanda[7]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[7]} <br/>
                                            Suhu: {dataTemperature[2]} C <br/>
                                            Kelembapan: {dataHumidity[2]} % <br/>
                                            Kecepatan Angin : {dataWindSpeed[2]} Knot <br/>
                                            Arah Angin : {dataWindDirection[2]} derajat <br/>
                                            Kondisi Cuaca: Cerah
                                        </Popup>
                                    </Marker>
                                    <Marker position = {dataTanda[8]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[8]} <br/>
                                            Suhu: {dataTemperature[3]} C <br/>
                                            Kelembapan: {dataHumidity[3]} % <br/>
                                            Kecepatan Angin : {dataWindSpeed[3]} Knot <br/>
                                            Arah Angin : {dataWindDirection[3]} derajat <br/>
                                            Kondisi Cuaca: Hujan Ringan
                                        </Popup>
                                    </Marker> 
                                    <Marker position = {dataTanda[9]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[9]} <br/>
                                            Suhu: {dataTemperature[4]} C <br/>
                                            Kelembapan: {dataHumidity[4]} % <br/>
                                            Kecepatan Angin : {dataWindSpeed[4]} Knot <br/>
                                            Arah Angin : {dataWindDirection[4]} derajat <br/>
                                            Kondisi Cuaca: Berawan
                                        </Popup>
                                    </Marker>
                                    <Marker position = {dataTanda[10]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[10]} <br/>
                                            Suhu: {dataTemperature[5]} C <br/>
                                            Kelembapan: {dataHumidity[5]} % <br/>
                                            Kecepatan Angin : {dataWindSpeed[5]} Knot <br/>
                                            Arah Angin : {dataWindDirection[5]} derajat <br/>
                                            Kondisi Cuaca: Berawan
                                        </Popup>
                                    </Marker> 
                                    <Marker position = {dataTanda[11]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[11]} <br/>
                                            Suhu: {dataTemperature[6]} C <br/>
                                            Kelembapan: {dataHumidity[6]} % <br/>
                                            Kecepatan Angin : {dataWindSpeed[6]} Knot <br/>
                                            Arah Angin : {dataWindDirection[6]} derajat <br/>
                                            Kondisi Cuaca: Berawan
                                        </Popup>
                                    </Marker>
                                    <Marker position = {dataTanda[12]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[12]} <br/>
                                            Suhu: {dataTemperature[7]} C <br/>
                                            Kelembapan: {dataHumidity[7]} % <br/>
                                            Kecepatan Angin : {dataWindSpeed[7]} Knot <br/>
                                            Arah Angin : {dataWindDirection[7]} derajat <br/>
                                            Kondisi Cuaca: Berawan
                                        </Popup>
                                    </Marker>
                                    <Marker position = {dataTanda[13]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[13]} <br/>
                                            Suhu: {dataTemperature[8]} C <br/>
                                            Kelembapan: {dataHumidity[8]} % <br/>
                                            Kecepatan Angin : {dataWindSpeed[8]} Knot <br/>
                                            Arah Angin : {dataWindDirection[8]} derajat <br/>
                                            Kondisi Cuaca: Berawan
                                        </Popup>
                                    </Marker> 
                                    <Marker position = {dataTanda[14]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[14]} <br/>
                                            Suhu: {dataTemperature[9]} C <br/>
                                            Kelembapan: {dataHumidity[9]} % <br/>
                                            Kecepatan Angin : {dataWindSpeed[9]} Knot <br/>
                                            Arah Angin : {dataWindDirection[9]} derajat <br/>
                                            Kondisi Cuaca: Berawan
                                        </Popup>
                                    </Marker>
                                    <Marker position = {dataTanda[15]}>
                                        <Popup>
                                            Kota: {dataDeskripsi[15]} <br/>
                                            Suhu: {dataTemperature[10]} C <br/>
                                            Kelembapan: {dataHumidity[10]} % <br/>
                                            Kecepatan Angin : {dataWindSpeed[10]} Knot <br/>
                                            Arah Angin : {dataWindDirection[10]} derajat <br/>
                                            Kondisi Cuaca: Berawan
                                        </Popup>
                                    </Marker>                          
                                </MapContainer>
                            </PetaContainer>
                            <Subtitle>
                                {'1. Tanda "(+)" digunakan untuk memperbesar dan "(-)" digunakan untuk memperkecil.'} <br/>
                                {'2. Parameter Cuaca dapat diketahui dengan cara "klik" marker/tanda yang ada di Peta.'}
                            </Subtitle>
                    </PetaWrapper>
                </PetaSection>
            </>
            );
        
    } else {
        return (
            <div>
                <p>Loading Data</p>
            </div>
        );
    }   
};

export default Peta;
