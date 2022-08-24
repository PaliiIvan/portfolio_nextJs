import PageWrapper from "../../components/page-wrapper/page-wrapper";
import { PageWithLayout } from "../_app";

const AboutSection: PageWithLayout = () => {
    return <div>
        Hello From About
    </div>
}

AboutSection.getLayout = (page) => (
    <PageWrapper>
        {page}
    </PageWrapper>
);

export default AboutSection;