;; Config updated 2026-06-15T10:02:00Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u14)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
