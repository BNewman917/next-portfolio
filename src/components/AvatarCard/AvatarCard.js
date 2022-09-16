import Avatar from "avataaars";
import { Background, Wrapper, Shadow } from "./AvatarCardStyles";

const AvatarCard = () => {
    return (
        <Wrapper>
            <Shadow />
            <Background>
                <img
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Prescription02&facialHairType=BeardMedium&facialHairColor=Auburn&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light"
                    style={{ width: "100%", height: "100%" }}
                />
            </Background>
        </Wrapper>
    );
};

export default AvatarCard;
