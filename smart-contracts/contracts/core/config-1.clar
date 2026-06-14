;; Config updated 2026-06-14T20:02:40Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u62)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
