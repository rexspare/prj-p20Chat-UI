import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS, COMMON_STYLES, FONTS, normalize } from '../../assets/stylesGuide';

interface phraseItemProps {
    item: any;
    index: number;
    list: any;
    setlist: any;
}

const PhraseInputItem: React.FC<phraseItemProps> = (props) => {
    const { item, index, list, setlist } = props
    const [value, setvalue] = useState<string>(` `)
    const [phrase, setphrase] = useState(item)

    const onChange = (txt: string) => {
        const updatedItem = { ...item, text: txt };
        const updatedList = list.map((p: any) =>
            p.id === item.id ? updatedItem : p
        );
        setlist(updatedList);
        setphrase(updatedItem);
    };

    return (
        <View
            style={[styles.main]}
        >
            <TextInput
                style={[styles.input]}
                value={phrase.text}
                onChangeText={(txt) => onChange(txt)}
                cursorColor={COLORS.PRIMARY}
            />
        </View>
    )
}

export default PhraseInputItem

const styles = StyleSheet.create({
    main: {
        width: '44%',
        backgroundColor: COLORS.DISABLED,
        ...COMMON_STYLES.center_,
        marginVertical: normalize(7),
        borderRadius: normalize(7)
    },
    input: {
        backgroundColor: COLORS.DISABLED,
        ...COMMON_STYLES.center_,
        fontSize: normalize(11),
        borderRadius: normalize(7),
        paddingVertical: normalize(3),
        width: '100%',
        color: COLORS.WHITE,
        fontFamily: FONTS.REGULAR,
        textAlign: 'center',
        minHeight: normalize(26),
    },
    txt: {
        color: COLORS.WHITE,
        marginVertical: 0,
        fontSize: normalize(12)
    }
})