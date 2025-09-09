import { revalidateTag } from 'next/cache';
import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import { SubmitButton } from 'components/submit-button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Django Work'
};

const tagName = 'randomWiki';
const maxExtractLength = 200;
const revalidateTTL = 60;

export default async function Page() {
    async function revalidateWiki() {
        'use server';
        revalidateTag(tagName);
    }

    return (
        <>
            <h1 className="mb-8">Social Media Site</h1>
            <section>
                <h3 className="mb-6">This was a solo final project for my class at Weber State covering python and django backend and frontend.
                    Its a very simple social media site meant to allow users to create posts, follow friends, and more. </h3>
                <figure>
                    <div className="relative overflow-hidden border-2 border-white rounded-lg aspect-3/2">
                        <Image
                            src="/images/SocialSiteMainPage.png"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            alt="Corgi"
                        />
                    </div>
                </figure>
                <Link href="https://github.com/calebm01/CS3620_FinalProject">
                    Repository Link
                </Link>
            </section>
        </>
    );
}
