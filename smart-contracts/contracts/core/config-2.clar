;; Config updated 2026-06-10T10:17:30Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u19)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
