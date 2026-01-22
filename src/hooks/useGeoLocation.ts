import { useState, useEffect } from 'react';

interface GeoData {
  country: string;
  countryCode: string;
  currency: string;
  currencySymbol: string;
  price: number;
  isLoading: boolean;
}

const BASE_PRICE_GHS = 10000;

// Approximate exchange rates: 1 foreign currency = X GHS
const exchangeRates: Record<string, number> = {
  USD: 15,   // 1 USD ≈ 15 GHS
  GBP: 19,   // 1 GBP ≈ 19 GHS
  EUR: 16,   // 1 EUR ≈ 16 GHS
  NGN: 0.009, // 1 NGN ≈ 0.009 GHS
  KES: 0.09,  // 1 KES ≈ 0.09 GHS
  ZAR: 0.8,   // 1 ZAR ≈ 0.8 GHS
};

const currencyMapping: Record<string, { currency: string; symbol: string }> = {
  // Ghana - base price
  GH: { currency: 'GHS', symbol: '₵' },
  
  // USD countries
  US: { currency: 'USD', symbol: '$' },
  PR: { currency: 'USD', symbol: '$' },
  GU: { currency: 'USD', symbol: '$' },
  
  // GBP countries
  GB: { currency: 'GBP', symbol: '£' },
  
  // EUR countries
  DE: { currency: 'EUR', symbol: '€' },
  FR: { currency: 'EUR', symbol: '€' },
  IT: { currency: 'EUR', symbol: '€' },
  ES: { currency: 'EUR', symbol: '€' },
  NL: { currency: 'EUR', symbol: '€' },
  BE: { currency: 'EUR', symbol: '€' },
  AT: { currency: 'EUR', symbol: '€' },
  PT: { currency: 'EUR', symbol: '€' },
  IE: { currency: 'EUR', symbol: '€' },
  FI: { currency: 'EUR', symbol: '€' },
  GR: { currency: 'EUR', symbol: '€' },
  LU: { currency: 'EUR', symbol: '€' },
  
  // African countries
  NG: { currency: 'NGN', symbol: '₦' },
  KE: { currency: 'KES', symbol: 'KSh ' },
  ZA: { currency: 'ZAR', symbol: 'R' },
  
  // Default
  DEFAULT: { currency: 'USD', symbol: '$' },
};

function calculatePrice(countryCode: string, currency: string): number {
  // Ghana keeps base price
  if (countryCode === 'GH') {
    return BASE_PRICE_GHS;
  }
  
  const rate = exchangeRates[currency] || exchangeRates.USD;
  // Convert GHS to foreign currency, then multiply by 3
  const convertedPrice = BASE_PRICE_GHS / rate;
  const finalPrice = Math.round(convertedPrice * 3 / 100) * 100; // Round to nearest 100
  
  return finalPrice;
}

export function useGeoLocation(): GeoData {
  const [geoData, setGeoData] = useState<GeoData>({
    country: 'Ghana',
    countryCode: 'GH',
    currency: 'GHS',
    currencySymbol: '₵',
    price: BASE_PRICE_GHS,
    isLoading: true,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const countryCode = data.country_code || 'GH';
        const countryName = data.country_name || 'Ghana';
        
        const mapping = currencyMapping[countryCode] || currencyMapping.DEFAULT;
        const price = calculatePrice(countryCode, mapping.currency);
        
        setGeoData({
          country: countryName,
          countryCode,
          currency: mapping.currency,
          currencySymbol: mapping.symbol,
          price,
          isLoading: false,
        });
      } catch (error) {
        console.error('Failed to fetch geo location:', error);
        setGeoData({
          country: 'Ghana',
          countryCode: 'GH',
          currency: 'GHS',
          currencySymbol: '₵',
          price: BASE_PRICE_GHS,
          isLoading: false,
        });
      }
    };

    fetchLocation();
  }, []);

  return geoData;
}

export function formatPrice(price: number, symbol: string): string {
  return `${symbol}${price.toLocaleString()}`;
}
