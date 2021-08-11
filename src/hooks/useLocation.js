// import * as Location from "expo-location";
import {useEffect, useState} from 'react';

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const {granted} = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: {latitude, longitude},
      } = await Location.getLastKnownPositionAsync();
      setLocation({latitude, longitude});
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return location;
};