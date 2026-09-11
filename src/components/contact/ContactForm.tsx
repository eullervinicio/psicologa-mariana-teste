"use client";

import { useState, type FormEvent } from "react";

import { formContent } from "@/content/landing-page";

import styles from "./ContactForm.module.css";

type FieldName = "name" | "whatsapp" | "email" | "message";
type FormErrors = Partial<Record<FieldName, string>>;

function readValue(data: FormData, field: FieldName) {
  return String(data.get(field) ?? "").trim();
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  const name = readValue(data, "name");
  const whatsapp = readValue(data, "whatsapp");
  const email = readValue(data, "email");
  const message = readValue(data, "message");
  const whatsappDigits = whatsapp.replace(/\D/g, "");

  if (name.length < 2) {
    errors.name = "Informe seu nome com pelo menos 2 caracteres.";
  }

  if (!whatsapp && !email) {
    const contactError = "Informe um WhatsApp ou e-mail para retorno.";
    errors.whatsapp = contactError;
    errors.email = contactError;
  } else {
    if (whatsapp && (whatsappDigits.length < 10 || whatsappDigits.length > 15)) {
      errors.whatsapp = "Informe um número de WhatsApp válido, com DDD.";
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Informe um endereço de e-mail válido.";
    }
  }

  if (message.length < 10) {
    errors.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
  }

  return errors;
}

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("website") ?? "")) {
      setStatus("Não foi possível validar o formulário.");
      return;
    }

    const nextErrors = validateForm(data);
    setErrors(nextErrors);

    const firstInvalidField = Object.keys(nextErrors)[0] as FieldName | undefined;
    if (firstInvalidField) {
      setStatus("Revise os campos indicados antes de continuar.");
      const field = form.elements.namedItem(firstInvalidField);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    setStatus(formContent.unavailableMessage);
  }

  function clearError(field: FieldName) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setStatus("");
  }

  function clearContactErrors(field: "whatsapp" | "email") {
    setErrors((current) => {
      if (!current.whatsapp && !current.email) return current;
      const next = { ...current };
      delete next[field];
      if (current.whatsapp === current.email) {
        delete next.whatsapp;
        delete next.email;
      }
      return next;
    });
    setStatus("");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Contato por formulário</p>
        <h3>{formContent.title}</h3>
        <p>{formContent.description}</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="website">Não preencha este campo</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className={styles.fieldFull}>
          <label htmlFor="contact-name">Nome <span aria-hidden="true">*</span></label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Como você gostaria de ser chamado(a)?"
            minLength={2}
            maxLength={100}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onInput={() => clearError("name")}
          />
          {errors.name ? <p id="name-error" className={styles.error}>{errors.name}</p> : null}
        </div>

        <fieldset className={styles.contactFields}>
          <legend>Contato para retorno</legend>
          <p id="contact-hint" className={styles.hint}>{formContent.contactHint}</p>

          <div className={styles.field}>
            <label htmlFor="contact-whatsapp">WhatsApp</label>
            <input
              id="contact-whatsapp"
              name="whatsapp"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(11) 99999-9999"
              maxLength={24}
              aria-invalid={Boolean(errors.whatsapp)}
              aria-describedby={errors.whatsapp ? "contact-hint whatsapp-error" : "contact-hint"}
              onInput={() => clearContactErrors("whatsapp")}
            />
            {errors.whatsapp ? <p id="whatsapp-error" className={styles.error}>{errors.whatsapp}</p> : null}
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-email">E-mail</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="voce@exemplo.com"
              maxLength={254}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-hint email-error" : "contact-hint"}
              onInput={() => clearContactErrors("email")}
            />
            {errors.email ? <p id="email-error" className={styles.error}>{errors.email}</p> : null}
          </div>
        </fieldset>

        <div className={styles.fieldFull}>
          <label htmlFor="contact-message">Mensagem <span aria-hidden="true">*</span></label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Escreva uma dúvida breve sobre o atendimento ou o agendamento."
            minLength={10}
            maxLength={600}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-hint message-error" : "message-hint"}
            onInput={() => clearError("message")}
          />
          <p id="message-hint" className={styles.hint}>{formContent.messageHint}</p>
          {errors.message ? <p id="message-error" className={styles.error}>{errors.message}</p> : null}
        </div>

        <div className={styles.actions}>
          <button type="submit">Enviar mensagem</button>
          <p><span aria-hidden="true">*</span> Campos obrigatórios</p>
        </div>

        {status ? (
          <p className={styles.status} role="status" aria-live="polite">{status}</p>
        ) : null}
      </form>
    </div>
  );
}
