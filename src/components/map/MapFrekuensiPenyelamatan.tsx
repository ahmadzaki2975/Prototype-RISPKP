import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import geojsonData from "@/data/Frekuensi_Penyelamatan.json";
import useDynamicZoom from "@/hooks/useDynamicZoom";
import DynamicZoom from "./utilities/DynamicZoom";

export default function MapWaktuTanggap(props: any) {
  const { position } = props;
  const zoom = useDynamicZoom();
  const data: GeoJSON.GeoJsonObject = geojsonData as GeoJSON.GeoJsonObject;

  return (
    <MapContainer
      className="w-full h-full select-none z-[1]"
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <DynamicZoom zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        // eslint-disable-next-line
        data={data}
        style={(feature) => {
          const level = feature?.properties.Jumlah;
          return {
            fillColor:
              level >= 0 && level <= 20
                ? "#FFBEBE"
                : level >= 21 && level <= 60
                  ? "#FF7F7F"
                  : level >= 61 && level <= 173
                    ? "#E60000"
                    : level >= 174 && level <= 230
                      ? "#A80000"
                      : "#FFFFFF",
            fillOpacity: 0.65,
            color: "#23272A",
            weight: 2,
          };
        }}
        onEachFeature={(feature, layer) => {
          const desa = feature.properties.DESA;
          const level = feature.properties.Jumlah;
          layer.bindTooltip(
            `
              <span class="font-semibold font-poppins">${desa}</span><br/>
              <span class="font-poppins">Frekuensi: ${level}</span>
            `
          );
        }}
      ></GeoJSON>
    </MapContainer>
  );
}
