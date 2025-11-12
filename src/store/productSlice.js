import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simula la llamada a una API para cargar productos
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Altavoz Bluetooth NeoSound",
          price: 229.00,
          image: "/src/assets/AltavozBluetoothNeoSound.png",
        },
        {
          id: 2,
          name: "Auriculares Inalámbricos Pro",
          price: 249.90,
          image: "/src/assets/AuricularesInalámbricosPro.png",
        },
        {
          id: 3,
          name: "Cámara Web HD VisionX",
          price: 139.90,
          image: "/src/assets/CámaraWebHD.png",
        },
        {
          id: 4,
          name: "Cargador Inalámbrico FastCharge",
          price: 89.00,
          image: "/src/assets/CargadorInalámbricoFastCharge.png",
        },
        {
          id: 5,
          name: "Laptop Ultrabook AirLite 14\"",
          price: 3799.00,
          image: "/src/assets/LaptopUltrabookAirLite.png",
        },
        {
          id: 6,
          name: "Mochila TechPack Urban",
          price: 199.00,
          image: "/src/assets/MochilaTechPackUrban.png",
        },
        {
          id: 7,
          name: "Mouse Gamer X-Speed Pro",
          price: 159.00,
          image: "/src/assets/MouseGamerXSpeed.png",
        },
        {
          id: 8,
          name: "Smartwatch FitBand 3",
          price: 179.00,
          image: "/src/assets/SmartwatchFitBand.png",
        },
        {
          id: 9,
          name: "Teclado Mecánico RGB StormKey",
          price: 289.00,
          image: "/src/assets/TecladoMecánicoRGB.png",
        },
      ]);
    }, 1000);
  });
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
