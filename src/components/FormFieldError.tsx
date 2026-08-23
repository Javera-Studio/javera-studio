/** Zeigt eine feldbezogene Fehlermeldung, verknüpft über aria-describedby auf dem jeweiligen Eingabefeld. */
export function FormFieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-red-600">
      {message}
    </p>
  );
}
