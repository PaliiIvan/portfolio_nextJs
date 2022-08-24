import Link from "next/link";
import PageWrapper from "../../components/page-wrapper/page-wrapper";
import { PageWithLayout } from "../_app";

const SkillsSection: PageWithLayout = () => {
    return <div>
        Skills
    </div>
}

SkillsSection.getLayout = (page) => (
    <PageWrapper>
        {page}
    </PageWrapper>
);

export default SkillsSection;