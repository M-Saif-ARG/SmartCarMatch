import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Brands = () => {

    const navigate = useNavigate();

    useEffect(() =>{
        if(!localStorage.getItem("token"))
            navigate("/signup");
    }, []);


    const brandsData = [
        { id: 1, logoUrl: require('../images/maruti.png'), name: 'MARUTI' },
        { id: 2, logoUrl: require('../images/hyundai.png'), name: 'HYUNDAI' },
        { id: 3, logoUrl: require('../images/tata.png'), name: 'TATA' },
        { id: 4, logoUrl: require('../images/mahindra.png'), name: 'MAHINDRA' },
        { id: 5, logoUrl: require('../images/honda.png'), name: 'HONDA' },
        { id: 6, logoUrl: require('../images/toyota.png'), name: 'TOYOTA' },
        { id: 7, logoUrl: require('../images/ford.png'), name: 'FORD' },
        { id: 8, logoUrl: require('../images/volkswagen.png'), name: 'VOLKSWAGEN' },
        { id: 9, logoUrl: require('../images/kia.png'), name: 'KIA' },
        { id: 10, logoUrl: require('../images/bmw.png'), name: 'BMW' },
        { id: 11, logoUrl: require('../images/mercedesbenz.png'), name: 'MERCEDES-BENZ' },
        { id: 12, logoUrl: require('../images/audi.png'), name: 'AUDI' },
        { id: 13, logoUrl: require('../images/jeep.png'), name: 'JEEP' },
        { id: 14, logoUrl: require('../images/nissan.png'), name: 'NISSAN' },
        { id: 15, logoUrl: require('../images/skoda.png'), name: 'SKODA' },
        { id: 16, logoUrl: require('../images/volvo.png'), name: 'VOLVO' },
        { id: 17, logoUrl: require('../images/landrover.png'), name: 'LAND ROVER' },
        { id: 18, logoUrl: require('../images/mg.png'), name: 'MORRIS GARAGES' },
        { id: 19, logoUrl: require('../images/isuzu.png'), name: 'ISUZU' },
        { id: 20, logoUrl: require('../images/fiat.png'), name: 'FIAT' },
    ];
    return (
        <>
            <div className="card-container">
                {brandsData.map((brand) => (
                    <div className="card" key={brand.id}>
                        <img src={brand.logoUrl} alt="Logo" className="logo" />
                        <h2 className="name">{brand.name}</h2>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Brands;
