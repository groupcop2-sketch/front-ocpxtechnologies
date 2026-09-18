export type ProcessStep = {
  number: string;
  title: string;
  text: string;
};

export const processSteps: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Entendemos",
    text: "Nos sentamos con el negocio para comprender el problema, las restricciones, los sistemas actuales y el resultado que importa.",
  },
  {
    number: "02",
    title: "Diseñamos",
    text: "Proponemos una solución y una arquitectura que se puedan construir, operar y sostener. Explicitamos alcances y trade-offs.",
  },
  {
    number: "03",
    title: "Construimos",
    text: "Desarrollamos con calidad, seguridad y entregas incrementales. El progreso se ve. Las decisiones quedan documentadas.",
  },
  {
    number: "04",
    title: "Implementamos",
    text: "Ponemos la solución en el entorno real, con migración, pruebas, observabilidad y transferencia al equipo que la va a usar.",
  },
  {
    number: "05",
    title: "Acompañamos",
    text: "Seguimos cerca después del go-live: ajuste, evolución y soporte técnico para que la solución no se quede en un entregable.",
  },
] as const;
