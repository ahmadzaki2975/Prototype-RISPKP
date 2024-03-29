import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import geojsonData from "@/data/Kepadatan_Bangunan.json";
import useDynamicZoom from "@/hooks/useDynamicZoom";
import DynamicZoom from "./utilities/DynamicZoom";

export default function MapKepadatanBangunan(props: any) {
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
        data={data}
        style={(feature) => {
          const level = feature?.properties.gridcode;
          return {
            fillColor:
              level == 1 ? "#FAD155" : level == 2 ? "#F2A72E" : "#AD5313",
            fillOpacity: 0.65,
            weight: 0,
          };
        }}
        onEachFeature={(feature, layer) => {
          const level = feature.properties.gridcode;
          layer.bindTooltip(
            `
            <span class="font-semibold font-poppins">Kepadatan Bangunan: ${level === 3 ? "Tinggi" : level === 2 ? "Sedang" : "Rendah"}
            </span>
            `
          );
        }}
      ></GeoJSON>
    </MapContainer>
  );
}
