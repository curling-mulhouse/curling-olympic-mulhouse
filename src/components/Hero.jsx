import Image from "next/image";

import { Button } from "@/components/Button";
import blurCyanImage from "@/images/blur-cyan.png";

export function Hero() {
  return (
    <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
        <div className="mx-auto max-w-2xl items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div className="relative">
              <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Curling Olympic Mulhouse
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                Debutant ou confirme, venez pratiquer le curling avec nous!
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/">Contactez-nous</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
