import BaseLayout from "../../components/BaseLayout/BaseLayout.tsx";
import ProfileSettings from "../../components/ProfileSettings/ProfileSettings.tsx";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader.tsx";

const Profile: React.FC = () => {
    return (
        <BaseLayout>
            <ProfileHeader />
            <ProfileSettings />
        </BaseLayout>
    );
};

export default Profile;
