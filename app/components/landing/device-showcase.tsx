import { motion } from "motion/react";
import { MacbookScroll } from "~/components/ui/macbook-scroll";
import { MobilePhoneScroll } from "~/components/ui/mobile-phone-scroll";
import { AndroidMockup, IPhoneMockup } from "~/components/ui/phone-mockup";
import { MeetingPreview } from "./meeting-preview";
import {
  AndroidMeetingPreview,
  IPhoneMeetingPreview,
} from "./phone-meeting-preview";

export function DeviceShowcase() {
  return (
    <div className="relative pb-[10vh] md:pb-[40vh]">
      {/* Desktop: MacBook + flanking phones (md+) */}
      <div className="hidden md:block">
        <div className="pointer-events-none absolute inset-0 z-10 hidden items-end justify-center gap-0 lg:flex">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-32 shrink-0 xl:w-40"
          >
            <IPhoneMockup>
              <IPhoneMeetingPreview />
            </IPhoneMockup>
          </motion.div>

          <div className="w-lg shrink-0" />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-32 shrink-0 xl:w-40"
          >
            <AndroidMockup>
              <AndroidMeetingPreview />
            </AndroidMockup>
          </motion.div>
        </div>

        <MacbookScroll showGradient={false}>
          <div className="size-full overflow-hidden">
            <MeetingPreview />
          </div>
        </MacbookScroll>
      </div>

      {/* Mobile: Phone with scroll animation (<md) */}
      <MobilePhoneScroll>
        <IPhoneMeetingPreview />
      </MobilePhoneScroll>
    </div>
  );
}
