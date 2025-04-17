import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Classics'
};

const explainer = `
Email: calebrmouritsen@gmail.com

LinkedIn: https://www.linkedin.com/in/caleb-mouritsen-90398533b/.
`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Contact Me</h1>
            <Markdown content={explainer} className="mb-12" />
        </>
    );
}
