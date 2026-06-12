;; Config updated 2026-06-12T20:04:03Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u53)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
