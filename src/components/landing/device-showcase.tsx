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
    <div className="relative pb-[6rem] md:pb-[32rem]">
      {/* Desktop: MacBook + flanking phones (md+) */}
      <div className="hidden md:block">
        <div className="pointer-events-none absolute inset-0 z-10 hidden items-end justify-center gap-0 lg:flex">
          <div className="w-32 shrink-0 xl:w-40">
            <IPhoneMockup>
              <IPhoneMeetingPreview />
            </IPhoneMockup>
          </div>

          <div className="w-lg shrink-0" />

          <div className="w-32 shrink-0 xl:w-40">
            <AndroidMockup>
              <AndroidMeetingPreview />
            </AndroidMockup>
          </div>
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
