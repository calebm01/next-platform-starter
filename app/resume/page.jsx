import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

export const metadata = {
    title: 'Resume'
};

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <ContextAlert className="mb-6" />
                <p className="mb-6 text-lg">
                    Link here to a pdf of my resume
                </p>
                
            </section>
        </div>
    );
}