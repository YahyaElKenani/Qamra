import { createSlice } from "@reduxjs/toolkit";
import bag1Image1 from '../assets/Images/bag1/image1.jpg'
import bag1Image2 from '../assets/Images/bag1/image2.jpg'
import bag1Image3 from '../assets/Images/bag1/image3.jpg'
import bag1Image4 from '../assets/Images/bag1/image4.jpg'
import bag1Image5 from '../assets/Images/bag1/image5.jpg'
import bag1Image6 from '../assets/Images/bag1/image6.jpg'
import bag2Image1 from '../assets/Images/bag2/image1.jpg'
import bag2Image2 from '../assets/Images/bag2/image2.jpg'
import bag2Image3 from '../assets/Images/bag2/image3.jpg'
import bag3Image1 from '../assets/Images/bag3/image1.jpg'
import bag3Image2 from '../assets/Images/bag3/image2.jpg'
import bag3Image3 from '../assets/Images/bag3/image3.jpg'
import bag4Image1 from '../assets/Images/bag4/image1.jpg'
import bag4Image2 from '../assets/Images/bag4/image2.jpg'
import bag4Image3 from '../assets/Images/bag4/image3.jpg'
import bag4Image4 from '../assets/Images/bag4/image4.jpg'
import bag4Image5 from '../assets/Images/bag4/image5.jpg'
import bag4Image6 from '../assets/Images/bag4/image6.jpg'
import bag5Image1 from '../assets/Images/bag5/image1.jpg'
import bag5Image2 from '../assets/Images/bag5/image2.jpg'
import bag5Image3 from '../assets/Images/bag5/image3.jpg'
import bag5Image4 from '../assets/Images/bag5/image4.jpg'
import bag5Image5 from '../assets/Images/bag5/image5.jpg'
import bag5Image6 from '../assets/Images/bag5/image6.jpg'
import bag6Image1 from '../assets/Images/bag6/image1.jpg'
import bag6Image2 from '../assets/Images/bag6/image2.jpg'
import bag6Image3 from '../assets/Images/bag6/image3.jpg'
import bag7Image1 from '../assets/Images/bag7/image1.jpg'
import bag7Image2 from '../assets/Images/bag7/image2.jpg'
import bag7Image3 from '../assets/Images/bag7/image3.jpg'
import bag7Image4 from '../assets/Images/bag7/image4.jpg'
import bag7Image5 from '../assets/Images/bag7/image5.jpg'
import bag7Image6 from '../assets/Images/bag7/image6.jpg'
const initialState = { 
    products: [
        {
            name: 'Taly', 
            arabicName: 'اسم مؤقت',
            id: 1, 
            sale: false,
            oldPrice: null, 
            saleAmount: null, 
            additonalFeatures: null,
            price: 180,
            length: 20,
            width: 22,
            images: [bag1Image1, bag1Image2, bag1Image3, bag1Image4, bag1Image5, bag1Image6]
        }, 
        {
            name: 'Noula', 
            arabicName: 'اسم مؤقت',
            id: 2, 
            sale: false,
            oldPrice: null, 
            saleAmount: null, 
            additonalFeatures: ['مبطنة', 'سوستة', 'كبسونة'],
            price: 300,
            length: 20,
            width: 30,
            images: [bag2Image1, bag2Image2, bag2Image3]
        }, 
        {
            name: 'Tessella', 
            arabicName: 'اسم مؤقت',
            id: 3, 
            sale: false,
            oldPrice: null, 
            saleAmount: null, 
            additonalFeatures: null,
            price: 250,
            length: 20,
            width: 25,
            images: [bag3Image1, bag3Image2, bag3Image3]
        }, 
        {
            name: 'Kayra', 
            arabicName: 'اسم مؤقت',
            id: 4, 
            sale: false,
            oldPrice: null, 
            saleAmount: null, 
            additonalFeatures: null,
            price: 250,
            length: 20,
            width: 20,
            images: [bag4Image1, bag4Image2, bag4Image3, bag4Image4, bag4Image5, bag4Image6]
        }, 
        {
            name: 'Weft', 
            arabicName: 'اسم مؤقت',
            id: 5, 
            sale: false,
            oldPrice: null, 
            saleAmount: null, 
            additonalFeatures: null,
            price: 200,
            length: 15,
            width: 22,
            images: [bag5Image1, bag5Image2, bag5Image3, bag5Image4, bag5Image5, bag5Image6]
        }, 
        {
            name: 'Loomy', 
            arabicName: 'اسم مؤقت',
            id: 6, 
            sale: false,
            oldPrice: null, 
            saleAmount: null, 
            additonalFeatures: null,
            price: 180,
            length: 20,
            width: 20,
            images: [bag6Image1, bag6Image2, bag6Image3]
        }, 
        {
            name: 'Kleemah', 
            arabicName: 'اسم مؤقت',
            id: 7, 
            sale: false,
            oldPrice: null, 
            saleAmount: null, 
            additonalFeatures: null,
            price: 300,
            length: 30,
            width: 20,
            images: [bag7Image1, bag7Image2, bag7Image3, bag7Image4, bag7Image5, bag7Image6]
        }, 
    ]
}

const productsSlice = createSlice({ 
    name: 'products',
    initialState, 
    reducers: { 
    }
})

export default productsSlice.reducer