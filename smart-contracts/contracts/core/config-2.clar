;; Config updated 2026-06-15T09:37:36Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u12)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
