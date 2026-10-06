// src/lib/pases.ts
//
// Textos de la tarjeta que dependen del número de pases. Viven SOLO acá:
// los usa el render del servidor (PaseInvitado.astro, frontmatter) y también el
// script que repinta la tarjeta cuando llegan los datos del invitado. Si se
// escribieran en los dos lados, tarde o temprano dirían cosas distintas.

/** "Pase" o "Pases" según el número. */
export function palabraPases(pases: number | null): string {
  return pases === 1 ? "Pase" : "Pases";
}

/**
 * Frase al pie de la tarjeta. Con un solo pase se le habla al invitado de
 * tú; con varios (o si la boda no usa pases), en plural.
 */
export function frasePases(pases: number | null): string {
  return pases === 1
    ? "Esperamos contar con tu presencia"
    : "Esperamos contar con su presencia";
}
