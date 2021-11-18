import {
    Wrapper,
    useUiExtension,
    FieldExtensionType,
    FieldExtensionFeature
} from '@graphcms/uix-react-sdk'

const MyField = () => {
    const { value, onChange } = useUiExtension();
    return <input 
        value={value} 
        onChange={({target: {value: val}}) => onChange(val)} />
}

const declaration = {
    extensionType: 'field',
    fieldType: FieldExtensionType.STRING,
    features: [FieldExtensionFeature.FieldRenderer],
    name: 'My first UIX',
};

const MyFirstExtension = () => {
    const uid = new URLSearchParams(document.location.search).get("extensionUid");
    console.log({ uid });
    return (
        <Wrapper uid={uid} declaration={declaration}>
            <MyField />
        </Wrapper>
    )
}

export default MyFirstExtension;