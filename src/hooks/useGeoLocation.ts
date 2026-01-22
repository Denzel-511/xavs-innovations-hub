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

const currencyMapping: Record<string, { currency: string; symbol: string; multiplier: number }> = {
  // Ghana - base price
  GH: { currency: 'GHS', symbol: '₵', multiplier: 1 },
  
  // USD countries (3x multiplier)
  US: { currency: 'USD', symbol: '$', multiplier: 3 },
  PR: { currency: 'USD', symbol: '$', multiplier: 3 },
  GU: { currency: 'USD', symbol: '$', multiplier: 3 },
  
  // GBP countries (3x multiplier)
  GB: { currency: 'GBP', symbol: '£', multiplier: 3 },
  
  // EUR countries (3x multiplier)
  DE: { currency: 'EUR', symbol: '€', multiplier: 3 },
  FR: { currency: 'EUR', symbol: '€', multiplier: 3 },
  IT: { currency: 'EUR', symbol: '€', multiplier: 3 },
  ES: { currency: 'EUR', symbol: '€', multiplier: 3 },
  NL: { currency: 'EUR', symbol: '€', multiplier: 3 },
  BE: { currency: 'EUR', symbol: '€', multiplier: 3 },
  AT: { currency: 'EUR', symbol: '€', multiplier: 3 },
  PT: { currency: 'EUR', symbol: '€', multiplier: 3 },
  IE: { currency: 'EUR', symbol: '€', multiplier: 3 },
  FI: { currency: 'EUR', symbol: '€', multiplier: 3 },
  GR: { currency: 'EUR', symbol: '€', multiplier: 3 },
  LU: { currency: 'EUR', symbol: '€', multiplier: 3 },
  
  // Other African countries - same as Ghana
  NG: { currency: 'NGN', symbol: '₦', multiplier: 1 },
  KE: { currency: 'KES', symbol: 'KSh', multiplier: 1 },
  ZA: { currency: 'ZAR', symbol: 'R', multiplier: 1 },
  
  // Default for other countries (USD at 3x)
  DEFAULT: { currency: 'USD', symbol: '$', multiplier: 3 },
};

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
        
        // For Ghana, keep base price; for others, apply multiplier
        const finalPrice = countryCode === 'GH' 
          ? BASE_PRICE_GHS 
          : BASE_PRICE_GHS * mapping.multiplier;
        
        setGeoData({
          country: countryName,
          countryCode,
          currency: mapping.currency,
          currencySymbol: mapping.symbol,
          price: finalPrice,
          isLoading: false,
        });
      } catch (error) {
        console.error('Failed to fetch geo location:', error);
        // Default to Ghana on error
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
