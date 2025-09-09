import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from 'components/markdown';
import Link from 'next/link';

export const metadata = {
    title: 'Classics'
};

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Contact Me</h1>
            <h3>Email: calebrmouritsen@gmail.com </h3>
            <h3>
                <Link href="https://www.linkedin.com/in/caleb-mouritsen-90398533b/"> LinkedIn </Link>
            </h3>
        </>
    );
}
