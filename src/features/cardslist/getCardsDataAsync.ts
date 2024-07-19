import { ICard } from '@ui/Card';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk<ICard[], string, { rejectValue: string }>(
  'cards/fetch-cards',
  async function (category: string, { rejectWithValue }) {
    const imagesLinks = await fetchImages(category);
    const response = await fetch(`http://localhost:3002/${category}`);

    if (!response.ok) {
      rejectWithValue('something went wrong');
    }
    const cards = await response.json();

    if (imagesLinks.length === 0) return cards;

    cards.forEach((item: ICard, index: number) => {
      item['image'] = imagesLinks[index];
    });

    return cards;
  }
);

const fetchImages = async (category: string): Promise<string[]> => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${category}&client_id=VE08Yut-g0nENPZnaiNi1HnkOUud7bp_0ugf4YrjQQA&per_page=27`
  );

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  const imagesLinks = data.results.map((item: any) => item.urls.small);
  return imagesLinks;
};
