;; Config updated 2026-05-30T20:58:41Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u56)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
