let map;

export const initMap = async () => {
  const position = { lat: 18.470121968354853, lng: -69.94012220681456 };

  //@ts-ignore
  const { Map } = (await google.maps.importLibrary(
    "maps",
    //@ts-ignore
  )) as google.maps.MapsLibrary;

  //@ts-ignore
  const { AdvancedMarkerView } = (await google.maps.importLibrary(
    "marker",
    //@ts-ignore
  )) as google.maps.MarkerLibrary;

  map = new Map(document.getElementById("map-container") as HTMLElement, {
    zoom: 15,
    center: position,
    mapId: "CITAMED_MAP",
    draggable: false,
    streetViewControl: false,
    mapTypeControl: false,
  });

  new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
};
