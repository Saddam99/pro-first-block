import Albums from "./Albums";
import Photos from "./Photos";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadAlbums, loadPhotos} from "../redux/actions";



function App() {
    const dispatch = useDispatch()

    const loadingAlbums = useSelector(state => state.albums.loading);
    const loadingPhotos = useSelector(state => state.photos.loading);

    useEffect(() => {
        dispatch(loadAlbums())
        dispatch(loadPhotos())
    }, [])


    if (loadingAlbums || loadingPhotos) {
        return (
            <div>идет загрузка</div>
        )
    }

  return (
    <div className="container">
      <Albums />
      <Photos />
    </div>
  );
}

export default App;
