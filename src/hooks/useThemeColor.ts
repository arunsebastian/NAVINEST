
import { Colors } from '@/constants/colors';

type useThemeColorProps ={
    context:string,
    mode?:string
}

export const useThemeColor = ({ context, mode= 'default'}:useThemeColorProps) =>{
  return (Colors as Record<string,any>)[mode][context]
}
