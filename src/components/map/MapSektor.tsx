import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import geojsonData1 from "@/data/Poin_Sektor.json";
import geojsonData2 from "@/data/Cakupan_Sektor.json";
import useDynamicZoom from "@/hooks/useDynamicZoom";
import DynamicZoom from "./utilities/DynamicZoom";

export default function MapWaktuTanggap(props: any) {
  const { position } = props;
  const zoom = useDynamicZoom();
  const data: GeoJSON.GeoJsonObject = geojsonData1 as GeoJSON.GeoJsonObject;
  const data2: GeoJSON.GeoJsonObject = geojsonData2 as GeoJSON.GeoJsonObject;
  // @ts-expect-error: GeoJsonObject has no property features
  data.features = data.features.concat(data2.features);

  return (
    <MapContainer
      className="w-full h-full select-none"
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
          const sektor = feature?.properties.Sektor;
          return {
            fillOpacity: 0.65,
            fillColor:
              sektor == "Sektor 1"
                ? "#C8FCEA"
                : sektor == "Sektor 2"
                  ? "#D4C4F5"
                  : sektor == "Sektor 3"
                    ? "#FED7AA"
                    : "#F9C6CD",
            color: "#23272A",
            weight: 2,
          };
        }}
        onEachFeature={(feature, layer) => {
          const sektor = feature.properties.Sektor;
          layer.bindTooltip(
            `<span class="font-semibold font-poppins">${sektor}</span><br/>`
          );
        }}
      ></GeoJSON>
    </MapContainer>
  );
}
