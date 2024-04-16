import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Icon } from './styles';
import { ButtonTypeStyleProps } from '@@types';
import { InputComponent } from '@components/InputComponent';

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonTypeStyleProps
}

export function  ButtonIconComponent({icon, type="PRIMARY", ...rest}:Props){
    return(
        <Container {...rest}>
            <Icon name={icon} type={type}/>
        </Container>
    )
}