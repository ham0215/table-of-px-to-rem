import { useSearchParams } from 'react-router-dom';

export default function useParams() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('p')) || 1;
  const fontSizeParam = searchParams.get('f');
  const fontSize = fontSizeParam === null ? '16' : fontSizeParam;

  return { page, fontSize };
}
