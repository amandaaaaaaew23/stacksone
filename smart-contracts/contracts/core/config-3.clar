;; Config updated 2026-05-30T12:18:50Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u22)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
