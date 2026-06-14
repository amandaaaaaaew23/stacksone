;; Config updated 2026-06-14T21:31:18Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u67)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
