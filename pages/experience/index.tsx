import PageWrapper from "../../components/page-wrapper/page-wrapper";
import { PageWithLayout } from "../_app";

const ExperienceSection: PageWithLayout = () => {
    return <div>
        Hello from Experience
    </div>
}


ExperienceSection.getLayout = (page) => (
    <PageWrapper>
        {page}
    </PageWrapper>
);


export default ExperienceSection;