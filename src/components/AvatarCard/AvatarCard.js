import Avatar from "avataaars";
import { Background, Wrapper, Shadow } from "./AvatarCardStyles";

const AvatarCard = () => {
    return (
        <Wrapper>
            <Shadow />
            <Background>
                <Avatar
                    style={{
                        height: "100%",
                        width: "100%",
                        transform: "translateY(10px)",
                    }}
                    avatarStyle="Transparent"
                    topType="NoHair"
                    accessoriesType="Prescription02"
                    facialHairType="BeardMedium"
                    facialHairColor="Auburn"
                    clotheType="BlazerShirt"
                    eyeType="Happy"
                    eyebrowType="RaisedExcited"
                    mouthType="Smile"
                    skinColor="Light"
                />
            </Background>
        </Wrapper>
    );
};

export default AvatarCard;
