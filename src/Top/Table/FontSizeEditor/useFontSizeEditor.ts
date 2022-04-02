import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAX_FONT_SIZE } from 'Constants';
import useParams from '../useParams';

export function validateFontSize(fontSize: string) {
  const iFontSize = Number(fontSize);
  return iFontSize > 0 && iFontSize <= MAX_FONT_SIZE;
}

export function validFontSize(fontSize: string) {
  return validateFontSize(fontSize) ? Number(fontSize) : 16;
}

export default function useFontSizeEditor() {
  const navigate = useNavigate();
  const { page, fontSize } = useParams();
  const error = validateFontSize(fontSize) ? '' : `Please set an integer from 1 to ${MAX_FONT_SIZE} on the font-size.`;

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
