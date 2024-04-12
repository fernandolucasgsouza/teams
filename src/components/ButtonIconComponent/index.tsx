import { TouchableOpacity } from 'react-native';

import { Container, Icon } from './styles';

type Props = TouchableOpacity & {

}

export function  ButtonIconComponent({}:Props){
    return(
        <Container>
            <Icon name="home"/>
        </Container>
    )
}