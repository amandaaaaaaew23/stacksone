;; Config updated 2026-06-11T11:02:04Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u26)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
