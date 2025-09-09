import Image from 'next/image';
import { ImageWithSizeOverlay } from './image-with-size-overlay';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';
import Link from 'next/link';

export const metadata = {
    title: '.Net Work'
};

const image1 = '/images/ServiCodeHome.png';

const ctx = getNetlifyContext();
const forceWebP = ctx === 'dev';

const nextImageSnippet = `
When running on Netlify, \`next/image\` is automatically set-up to use Netlify Image CDN for optimized images.

~~~jsx
import Image from 'next/image';

// In your component
<Image src="/images/corgi.jpg" alt="Corgi" /* ... additional props */ />
~~~
`;

const originalVsCdnSnippet = `
In the code below, a regular \`<img>\` tag is used in both cases for a framework-agnostic example. 
Other than using \`next/image\` or rolling your own \`<img>\` tags, you can also use the excellent [unpic-img](https://unpic.pics/).

~~~jsx
// <== On the left, the original image
<img src="/images/corgi.jpg" alt="Corgi" />

// ==> On the right, explicitly using Netlify Image CDN endpoint for a responsive image
<img 
  srcSet="/.netlify/images?url=images/corgi.jpg&w=640 640w, /.netlify/images?url=images/corgi.jpg&w=1280 1280w, /.netlify/images?url=images/corgi.jpg&w=2048 2048w"
  sizes="(max-width: 1024px) 100vw, 1024px" 
  alt="Corgi" 
/>
~~~
`;

const devModeWarning = `
In local development, optimization is performed locally without automatic format
detection, so format is set to WebP.
`;

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <ContextAlert
                    addedChecksFunction={(ctx) => {
                        return ctx === 'dev' ? devModeWarning : null;
                    }}
                    className="mb-6"
                />
                <h1>ServiCode LMS</h1>
            </section>
            <section>
                <h3>A learning management system myself and my group were tasked to create for our Software Engineering II class at Weber State University.
                    This project is meant to invoke the learning systems utilized in well known services like Canvas. </h3>
                <figure>
                    <div className="relative overflow-hidden border-2 border-white rounded-lg aspect-3/2">
                        <Image
                            src="/images/ServiCodeHome.png"
                            priority
                            fill={true}
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            alt="Corgi"
                        />
                    </div>
                </figure>
                <Link href="https://github.com/calebm01/ServiCode-LMS">
                    Repository Link
                </Link>
            </section>

            <section>
            <h1>Pixel Perspective</h1>
            </section>

            <section>
                <h3> A website meant to invoke the community driven review site LetterBoxd but for video games as opposed to movies.
                    This site was my group project for the Weber State Capstone class. </h3>
                <figure>
                    <div className="relative overflow-hidden border-2 border-white rounded-lg aspect-3/2">
                        <Image
                            src="/images/PixelPerspectiveMain.png"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            alt="Corgi"
                        />
                    </div>
                </figure>
                <figure>
                    <div className="relative overflow-hidden border-2 border-white rounded-lg aspect-3/2">
                        <Image
                            src="/images/PixelPerspectiveProfile.png"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            alt="Corgi"
                        />
                    </div>
                </figure>
                <Link href="https://github.com/jstewart4u2c/PixelPerspective">
                    Repository Link
                </Link>
            </section>
        </div>
    );
}
