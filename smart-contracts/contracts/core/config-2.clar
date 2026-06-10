;; Config updated 2026-06-10T17:16:46Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u47)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
