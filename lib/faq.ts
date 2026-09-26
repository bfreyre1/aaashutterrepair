import type { FaqItem } from "@/lib/schema";
import { ADDRESS_DISPLAY, HOURS_FAQ, PHONE_DISPLAY } from "@/lib/site";

const plantationRepairCost: FaqItem = {
  question: "How much does plantation shutter repair cost in Los Angeles?",
  answer: `There is no flat price. The job depends on how many louvers failed, whether the tilt rod or the hinges are the problem, whether the paint or stain has to match, and how far the house is from our Valley base. Repair is usually far less than full replacement, and most plantation shutter jobs finish in one visit. Call or text ${PHONE_DISPLAY} for a free estimate on the window you actually have.`,
};

const repairVsReplace: FaqItem = {
  question: "Is repairing cheaper than replacing plantation shutters?",
  answer:
    "Usually, yes. A split louver, a loose tilt rod, or a hinge that let go is a repair, and that is far less than a new custom plantation shutter set for the room. We bring up new shutters only when rot, a broken stile, or an opening that was never the right size makes repair a waste. We say that on the visit.",
};

const typicalVisit: FaqItem = {
  question: "What happens on a typical repair visit?",
  answer:
    "We come to the house and look at the window before any work starts. On plantation shutters the usual parts are staples, louvers, tilt rods, hinges, magnets, and side pins, and about 90% of those jobs finish at the house in one visit. If a part has to be matched or ordered, we say so before we leave and come back when it is in. We do not promise a same-day visit.",
};

const textPhotos: FaqItem = {
  question: "Can I text photos before you come out?",
  answer: `Yes. Text a photo of the louver, tilt rod, hinge, magnet, or shade to ${PHONE_DISPLAY}. We look at it and text back to schedule. After-hours messages are fine — live help is daily 10am–7pm.`,
};

const onSitePlantation: FaqItem = {
  question: "Do you repair plantation shutters on site?",
  answer:
    "Yes. About 90% of plantation wood shutter jobs finish at the house — staples, louvers, tilt rods, hinges, magnets, and side pins. The panel stays in the opening. If the damage actually needs a shop, we will say so.",
};

const onePart: FaqItem = {
  question:
    "Can you replace one louver, tilt rod, or hinge instead of the whole panel?",
  answer:
    "Often yes. A split or missing plantation shutter louver, a loose tilt rod, or a tired hinge can be replaced so the rest of the panel stays. We say so when the stile or the whole panel is actually finished. One failed part is the usual call.",
};

const paintedAndStained: FaqItem = {
  question: "Do you repair painted and stained wood shutters?",
  answer:
    "Yes. Matching one slat or one panel — painted or stained — is regular work when the rest of the room is still good. The finish has to sit close enough that the repair does not stand out in daylight. If the whole set is sun-faded past a match, we will tell you before we start.",
};

const blindsAndShades: FaqItem = {
  question: "Do you repair blinds and shades as well as shutters?",
  answer:
    "Yes. Blind repair and shade repair sit alongside the plantation shutter work. The same visit can cover a wood shutter in one room and a shade in another. New blinds or shades are available when a treatment is truly beyond repair. We start with the repair.",
};

const somfyRepair: FaqItem = {
  question: "Do you repair Somfy and other motorized shades?",
  answer:
    "Yes. Somfy and other motorized shade systems are a listed service — motors, remotes, limits, and whether the shade still travels. A dead remote is not automatically a new shade. We diagnose the shade at the house before anyone talks about replacing it.",
};

const shadeWontMove: FaqItem = {
  question: "My motorized shade will not go up or down — can you help?",
  answer:
    "Often yes. The shade may have lost its remote pairing, its upper and lower limits, or the motor itself may have stopped. We diagnose that at the house before anyone talks about a new shade. Tell us the brand if you know it, whether the remote lights up, and whether the shade hums, jerks, or stays dead.",
};

const serviceArea: FaqItem = {
  question: "What areas do you serve?",
  answer: `We repair shutters, blinds, and shades on site across the San Fernando Valley and greater Los Angeles, including Sherman Oaks, Van Nuys, Encino, Studio City, Burbank, Glendale, Woodland Hills, Los Angeles, Pasadena, Santa Monica, and Santa Clarita. The office mailbox is ${ADDRESS_DISPLAY}. Repair happens at your window. If your city is nearby and you do not see it listed, call or text ${PHONE_DISPLAY} and we will say whether the drive is reasonable.`,
};

const freeEstimate: FaqItem = {
  question: "How do I get a free estimate?",
  answer: `Call or text ${PHONE_DISPLAY}. That is the primary way to reach us, and the same number does both. You can also send the estimate form and we text back to schedule. A photo of the louver, tilt rod, hinge, remote, or shade helps us tell you whether it looks like a one-visit repair.`,
};

const showroom: FaqItem = {
  question: "Do you have a showroom?",
  answer: `No. ${ADDRESS_DISPLAY} is a mailbox and office in Sherman Oaks. There is no showroom and nothing to drop off. Repair happens at your window.`,
};

const priceDrivers: FaqItem = {
  question: "What changes the price of a plantation shutter repair?",
  answer:
    "Louver count, a tilt rod that needs more than new staples, hinges on a heavy door-wall panel, and a paint or stain that has to match the rest of the room. Travel across greater Los Angeles matters too, because the work is on site from a Sherman Oaks base. Two windows with the same symptom can still be different jobs, which is why the estimate is for the window in front of us.",
};

const oneVisit: FaqItem = {
  question: "Do most plantation shutter repairs finish in one visit?",
  answer:
    "Most do. About 90% of plantation wood shutter jobs finish at the house — staples, louvers, tilt rods, hinges, magnets, and side pins. A part that has to be matched or ordered is the exception, and we say so before we leave. We do not promise that every opening will be done the day you call.",
};

const travelCost: FaqItem = {
  question: "Does travel across Los Angeles change the estimate?",
  answer: `It can. The office is ${ADDRESS_DISPLAY}, and the repair still happens at your window. A house in the central Valley is a shorter trip than Santa Monica, Pasadena, or Santa Clarita. Call or text ${PHONE_DISPLAY} and we will tell you if the drive is reasonable. There is no published mileage table.`,
};

const plantationEstimate: FaqItem = {
  question: "How do I get a free estimate for plantation shutter repair?",
  answer: `Call or text ${PHONE_DISPLAY}, or send the estimate form and choose plantation shutter repair. A photo of the louver, tilt rod, hinge, or magnet is enough to start. We text back to schedule a look at the window. The number we give you is for that opening, not a citywide rate card.`,
};

const deadRemote: FaqItem = {
  question: "Can a dead remote be fixed without replacing the shade?",
  answer:
    "Often the remote, the pairing, or the motor is the failure, not the fabric. We diagnose that before anyone talks about a new shade. A remote that lights up and does nothing is a different job from a motor that hums and will not move. Bring every remote you have, including a spare in a drawer.",
};

const limits: FaqItem = {
  question: "What does it mean when a motorized shade loses its limits?",
  answer:
    "Limits are the top and bottom stops the motor is supposed to remember. When they are lost, the shade may stop short, overrun the top, or refuse to travel the full opening. If the motor still runs, those stops can often be set again on site. If the motor is silent, the remote, the power, or the motor itself comes first.",
};

const replaceShade: FaqItem = {
  question: "When is replacing a motorized shade smarter than repairing it?",
  answer:
    "Replacement makes more sense when the motor is discontinued and nothing compatible will fit, when the fabric is torn or sun-rotted, or when the shade was never the right size for the opening. A remote that lost pairing, a dead battery wand, or limits that drifted are usually repairs. We say which one it is after we see the shade.",
};

const shutterBesideShade: FaqItem = {
  question: "Do you also repair the shutter next to a motorized shade?",
  answer:
    "Yes. Many houses have shutters in one room and a motor in another. We can look at both on the same visit. Plantation wood shutters are still the specialty — staples, louvers, tilt rods, hinges, magnets, and side pins — and the shade does not have to be a separate company.",
};

export const faqCostItems: FaqItem[] = [
  plantationRepairCost,
  repairVsReplace,
  typicalVisit,
  textPhotos,
];

export const faqShutterItems: FaqItem[] = [
  onSitePlantation,
  onePart,
  paintedAndStained,
];

export const faqShadeItems: FaqItem[] = [
  blindsAndShades,
  somfyRepair,
  shadeWontMove,
];

export const faqServiceItems: FaqItem[] = [
  serviceArea,
  HOURS_FAQ,
  freeEstimate,
  showroom,
];

export const faqHubItems: FaqItem[] = [
  ...faqCostItems,
  ...faqShutterItems,
  ...faqShadeItems,
  ...faqServiceItems,
];

export const plantationCostPageFaq: FaqItem[] = [
  plantationRepairCost,
  repairVsReplace,
  priceDrivers,
  oneVisit,
  travelCost,
  plantationEstimate,
];

export const somfyPageFaq: FaqItem[] = [
  somfyRepair,
  shadeWontMove,
  deadRemote,
  limits,
  replaceShade,
  shutterBesideShade,
];
