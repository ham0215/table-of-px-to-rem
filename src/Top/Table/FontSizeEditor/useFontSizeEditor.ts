import { useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MAX_FONT_SIZE } from 'Constants';

export function validateFontSize(fontSize: number) {
  return Number.isInteger(fontSize) && fontSize > 0 && fontSize <= MAX_FONT_SIZE;
}

export default function useFontSizeEditor() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('p')) || 1;
  const fontSize = searchParams.get('f') || '';
  const error = validateFontSize(Number(fontSize)) ? '' : `Please set an integer from 1 to ${MAX_FONT_SIZE} on the font-size.`;

  const handleChangeFontSize = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const fontSize = event.target.value;
      navigate(`?p=${page}&f=${fontSize}`);
    },
    [navigate, page]
  );

  return {
    fontSize,
    handleChangeFontSize,
    error,
  };
}
