// Prices and programme structures, kept in one place so they stay consistent across pages.
// Source: Shabnam Lee Price List 2026, Indonesia fees (September 2026 update).
// The figures live in programmes.json, which the editor at /admin/ changes.
import data from './programmes.json';

export const CONSULT_SESSION = data.consult_session;
export const NOT_SURE_NOTE = `<strong>Prefer not to commit to a package yet?</strong> Start with a single ${CONSULT_SESSION.length} session (${CONSULT_SESSION.price}) with Shabnam instead. You can decide on a package later, if and when it feels right.`;

export const INDIVIDUAL_PROGRAMMES = data.individual;
export const INTENSIVE_VS_WEEKLY = data.intensive_vs_weekly;
export const COUPLE_PROGRAMMES = data.couple;
