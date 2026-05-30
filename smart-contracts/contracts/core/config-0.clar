;; Config updated 2026-05-30T22:22:00Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u62)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
