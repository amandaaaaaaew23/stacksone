;; Config updated 2026-06-15T05:44:44Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u98)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
